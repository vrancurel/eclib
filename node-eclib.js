// Basic structures of the ECLib library

// We will not require anything right now.
//

var addon = require('bindings')('Release/node-eclib.node')

function ECLib(){

	console.log("Blank function");
}


ECLib.prototype.create = function ( ec_backend_id, k, m, w, hd, ct, backend_args ,callback) {
	
	var instance_descriptor_id = -1;

	console.log("JS create#");
	console.log(addon.create());
	//callback.call(instance_descriptor_id,err)
};

ECLib.prototype.destroy = function(instance_descriptor_id,callback){
	
	console.log("JS destroy#");
	console.log(addon.destroy());
	//callback.call(resultcode,err)
};

ECLib.prototype.encode = function(instance_descriptor_id, orig_data,orig_data_size,callback){

	console.log("JS encode ");
	console.log(addon.encode());

	//result.resultcode = 1//2/3/4/5
	//result.encoded_data = "" ,result.encoded_parity ="", result.fragment_len =12312312312312;
	//callback.call(result,err)
};

ECLib.prototype.encodeCleanup = function(instance_descriptor_id, encoded_data,encoded_parity,callback){
	
	console.log("JS encodeCleanup ");
	console.log(addon.encodeCleanup());
	//callback.call(resultcode,err)
};

ECLib.prototype.decode = function(instance_descriptor_id, available_fragments
							 , num_fragments, fragment_len, callback){

	console.log("JS decode #");
	console.log(addon.decode());
	//result.resultcode = 1//2/3/4/5
	//result.out_data = "" ,result.out_data_len =""
	//callback.call(result,err)
};

ECLib.prototype.decodeCleanup = function(instance_descriptor_id, data,callback){

	console.log("JS decode_cleanup #");
	console.log(addon.decodeCleanup());
	//callback.call(resultcode,err)
};


ECLib.prototype.reconstructFragment = function(instance_descriptor_id, available_fragments
	, num_fragments, fragment_len,destination_idx, callback) {

	console.log("from reconstructFragment method");
	//result.resultcode = 1//2/3/4/5
	//result.out_fragment = ""
	//callback.call(result,err)

};

ECLib.prototype.fragmentsNeeded = function (instance_descriptor_id,fragments_to_reconstruct
					,fragments_to_exclude,fragments_needed,callback){
	
	console.log("from fragmentsNeeded method");
	//callback.call(resultcode,err)
}

ECLib.prototype.getFragmentMetadata = function(fragment, fragment_metadata, callback){

	console.log("from getFragmentMetadata method");
	//callback.call(resultcode,err)

};

ECLib.prototype.isInvalidFragment = function(instance_descriptor_id, fragment, callback){

	console.log("from isInvalidFragment method");
	//callback.call(resultcode,err)
};

ECLib.prototype.verifyStripeMetadata = function (instance_descriptor_id, fragments
					, num_fragments, callback){

	console.log("from verifyStripeMetadata method");
	//callback.call(resultcode,err)
};

ECLib.prototype.getAlignedDataSize = function(instance_descriptor_id, data_len, callback){

	console.log("from getAlignedDataSize method");
	//callback.call(resultlength, err)
};

ECLib.prototype.getMinimumEncodeSize = function (instance_descriptor_id, callback){

	console.log("from getMinimumEncodeSize method");
	//callback.call(resultminimumlength, err)
};

ECLib.prototype.getFragmentSize = function(instance_descriptor_id, data_len ,callback){

	console.log("from getFragmentSize method");
	//callback.call(resultfragmentsize, err)

};

module.exports = ECLib 