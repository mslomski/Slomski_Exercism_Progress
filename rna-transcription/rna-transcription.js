function DnaTranscriber(){

}
DnaTranscriber.prototype.toRna = function(strand) {

  return strand
          .split("")
          .map(function(char) {
            return {
              'C': 'G',
              'G': 'C',
              'A': 'U',
              'T': 'A'
            }[char];
          })
          .join("");
};

module.exports = DnaTranscriber;
