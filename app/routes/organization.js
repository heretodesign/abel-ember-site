import Ember from 'ember';

// export default Ember.Route.extend({
// });


// this is called data-loading in ember and you load data in route-JS file
//we just fetched data similar to componentDidMount(in React)
// localhost/organizations/facebook
export default class extends Route {
    async model(params) {
        console.log(params);
        const response = await fetch(`http://api.github.com/orgs/${params.org}/members`);
    
        const json = await response.json();
        console.lo(json);
        return json;

    }
}
