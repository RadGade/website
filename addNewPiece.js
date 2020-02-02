async addNewPiece(hash, instrument = 'Piano') {
   const existingPiece = this.getPieceByHash(hash)
   if (existingPiece) {
     await this.updatePieceByHash(hash, instrument)
     return
   }

   const cid = await this.pieces.put({ hash, instrument })
   return cid
 }