export default function getNeighborhoodsList() {
  self.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  const self = this;
  self.addNeighborhood =  add = (newNeighborhood) => {
    self.sanFranciscoNeighborhoods.push(newNeighborhood);
    return self.sanFranciscoNeighborhoods;
  };
}
