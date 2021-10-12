import * as React from 'react';
import * as Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.GATSBY_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
});

interface StoreContextInterface {
  client: ShopifyBuy.Client;
  checkout: Client.Cart;
  cart: Client.LineItem[];
  isOpen: boolean;
  loading: boolean;
  didJustAddToCart: boolean;
  addVariantToCart: (variantId, quantity) => {};
  removeLineItem: (checkoutID, lineItemID) => {};
  updateLineItem: (checkoutID, lineItemID, quantity) => {};
}

const defaultValues: StoreContextInterface = {
  cart: [],
  isOpen: false,
  loading: false,
  didJustAddToCart: false,
  addVariantToCart: (_variantId: any, _quantity: any): {} => {
    throw new Error('Function not implemented.');
  },
  removeLineItem: (_checkoutID: any, _lineItemID: any): {} => {
    throw new Error('Function not implemented.');
  },
  updateLineItem: (_checkoutID: any, _lineItemID: any, _quantity: any): {} => {
    throw new Error('Function not implemented.');
  },
  client: client,
  checkout: null,
};

export const StoreContext = React.createContext(defaultValues);

const isBrowser = typeof window !== 'undefined';
const localStorageKey = `shopify_checkout_id`;

export const StoreProvider = (props: { children: React.ReactNode }) => {
  const [checkout, setCheckout] = React.useState(defaultValues.checkout);
  const [loading, setLoading] = React.useState(false);
  const [didJustAddToCart, setDidJustAddToCart] = React.useState(false);

  const setCheckoutItem = (checkout: Client.Cart) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id as string);
    }

    setCheckout(checkout);
  };

  React.useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          );
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addVariantToCart = (variantId, quantity) => {
    setLoading(true);

    const checkoutID = checkout.id;

    const lineItemsToUpdate: Client.LineItemToAdd[] = [
      {
        variantId,
        quantity: parseInt(quantity, 10),
      },
    ];

    return client.checkout
      .addLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res);
        setLoading(false);
        setDidJustAddToCart(true);
        setTimeout(() => setDidJustAddToCart(false), 3000);
      });
  };

  const removeLineItem = (checkoutID, lineItemID) => {
    setLoading(true);

    return client.checkout
      .removeLineItems(checkoutID, [lineItemID])
      .then((res) => {
        setCheckout(res);
        setLoading(false);
      });
  };

  const updateLineItem = (
    checkoutID: string | number,
    lineItemID,
    quantity
  ) => {
    setLoading(true);

    const lineItemsToUpdate = [
      { id: lineItemID, quantity: parseInt(quantity, 10) },
    ];

    return client.checkout
      .updateLineItems(checkoutID, lineItemsToUpdate)
      .then((res) => {
        setCheckout(res);
        setLoading(false);
      });
  };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        removeLineItem,
        updateLineItem,
        checkout,
        loading,
        didJustAddToCart,
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};
