import { NavigationActions } from 'react-navigation';

let _navigator, _navStore;

function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

function setNavigationStore(navigationStore) {
  _navStore = navigationStore;
}

function generateUid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

function navigate(routeName, { key, params, getNavigationParams }) {
  const func = getNavigationParams(_navStore);
  func(params, key);
  _navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      //   params,
      key,
    })
  );
}

export default {
  navigate,
  setTopLevelNavigator,
  setNavigationStore,
  generateUid,
};
