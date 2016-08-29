var Security = {
  password: 'c666c8d473fea18c8cfd348e46d698dd76eb9734ccf9933603ff18059e284717d78a2e878ee37ea726eb7122299a50bf3b89e82d4f8500c3fd11515d295ac396'
  ,
  encrypt: function(x){
    return GibberishAES.enc(JSON.stringify(x),this.password);
  },
  decrypt: function(x){
    return JSON.parse(GibberishAES.dec(x, this.password));
  }
};