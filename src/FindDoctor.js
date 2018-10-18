export default class FindDoctor {
  findDoctorByConcern(concern) {
    return new Promise(function(resolve, reject) {
      const request = new XMLHttpRequest();
      // console.log("Hi");
      const url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${concern}&location=or-portland&sort=best-match-asc&skip=0&limit=10&user_key=99f6688bd74e87a07cc06f1ef9506ed4`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

  }
}
