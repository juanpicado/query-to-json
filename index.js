
"use strict";

module.exports = {
  queryToJson: ( query ) => {
      let result = {};
      if ( query.lastIndexOf( "?" ) === 0 ) {
        query = query.substr( 1 );
      }
      for ( var value of query.split( "&" ) ) {
        var item = value.split( "=" );
        result[ item[ 0 ] ] = decodeURIComponent( item[ 1 ] );
      }
      return result;
  },
  jsonToQuery: ( json ) => {
    let url = Object.keys( json ).map( ( i ) => {
        let key = encodeURIComponent( i );
        let value = encodeURIComponent( json[ key ] );
        return `${key}=${value}`;
    } ).join( "&" );
    return `?${url}`;
  }
};
