import { createSelector } from "reselect";

//after changing the structure of the data stored in the shop.data, we do not need this mapping:
/*
const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};
*/

const selectShop = (state) => state.shop;


//After changing the structure of data in shop.data, the selector function below must be changed
//Because collections returned from this function is no more an array, and we can not map over it
//As a solution, rather than changing this, we are adding another selector returns an array of collections: selectShopCollectionsForPreview
export const selectShopCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  collections => Object.keys(collections).map(key => collections[key])
)

//BE CAREFUL, THE SELECTOR DEFINED BELOW IS A FUNCTION, RETURNS A PORTION OF STATE
/*
export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    (collections) => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
  )
*/

export const selectCollection = collectionUrlParam => 
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )