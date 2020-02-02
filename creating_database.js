  async _init () {
    this.orbitdb = await OrbitDB.createInstance(node)
   this.defaultOptions = { accessController: { write: [this.orbitdb.identity.id] }}

   const docStoreOptions = {
     ...this.defaultOptions,
     indexBy: 'hash',
   }
   this.pieces = await this.orbitdb.docstore('pieces', docStoreOptions)
	await this.pieces.load()
  }
  
/* then run this in application code

NPP.onready = () => {
   console.log(NPP.pieces.id)
}*/