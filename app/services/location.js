import $ from "jquery";
import { Promise as EmberPromise } from "rsvp";
import Service from "@ember/service";

export default Service.extend({
  searchbylonglat(longitude, latitude) {
    return new EmberPromise((resolve, reject) => {
      $.ajax({
        method: "GET",
        contentType: "application/json",
        url: `http://localhost:3000/search-bylonglat`,
        data: {
          longitude,
          latitude
        }
      }).then(
        response => {
          resolve(response);
        },
        reason => {
          reject(reason);
        }
      );
    });
  }
});
