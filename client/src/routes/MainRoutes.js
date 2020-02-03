const routes = [
  {url:`api/v1/team/{id}`,name:'getTeamById'}
]


/**
 * 
 * @param {routeName} routeName gets the route by name
 * @param  {...args} args sets the parameters into the route 
 */
export function Routify(routeName,...args){
  let route = getRouteName(routeName);
  // let regex = /\{[a-z]*}/i
  let regex = /\{(.*?)\}/i
  args.forEach(arg => {
    route = route.replace(regex,arg);
  });
  return route
}

//returns a route by name
function getRouteName(name) {
  return routes.filter((route) => {
    return route.name === name;
  })[0].url;
}
