import Controller from "@ember/controller";
import { inject as service } from "@ember/service";

export default Controller.extend({
  locationfound: null,
  store: service(),
  location: service(),
  actions: {
    searchLocation() {
      this.get("location")
        .searchbylonglat(this.get("longitude"), this.get("latitude"))
        .then(locationfound => {
          this.set("locationfound", { locationfound });
        })
        .catch(reason => {
          alert(reason);
        });
    },
    importcsv() {
      alert("COMINGSOON ASUUU!");
    }
  }
});
