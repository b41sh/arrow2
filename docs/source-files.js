var N = null;var sourcesIndex = {};
sourcesIndex["arrow2"] = {"name":"","dirs":[{"name":"alloc","files":["alignment.rs","mod.rs"]},{"name":"array","dirs":[{"name":"binary","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"boolean","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"dictionary","files":["mod.rs","mutable.rs"]},{"name":"equal","files":["boolean.rs","dictionary.rs","fixed_size_binary.rs","fixed_size_list.rs","list.rs","mod.rs","null.rs","primitive.rs","struct_.rs","utils.rs","variable_size.rs"]},{"name":"fixed_size_binary","files":["iterator.rs","mod.rs","mutable.rs"]},{"name":"fixed_size_list","files":["iterator.rs","mod.rs","mutable.rs"]},{"name":"growable","files":["binary.rs","boolean.rs","dictionary.rs","fixed_binary.rs","list.rs","mod.rs","null.rs","primitive.rs","structure.rs","utf8.rs","utils.rs"]},{"name":"list","files":["ffi.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"primitive","files":["display.rs","ffi.rs","from_natural.rs","iterator.rs","mod.rs","mutable.rs"]},{"name":"utf8","files":["ffi.rs","from.rs","iterator.rs","mod.rs","mutable.rs"]}],"files":["display.rs","ffi.rs","mod.rs","null.rs","ord.rs","specification.rs","struct_.rs"]},{"name":"bitmap","dirs":[{"name":"utils","dirs":[{"name":"chunk_iterator","files":["chunks_exact.rs","merge.rs","mod.rs"]}],"files":["iterator.rs","mod.rs","slice_iterator.rs","zip_validity.rs"]}],"files":["bitmap_ops.rs","immutable.rs","mod.rs","mutable.rs"]},{"name":"buffer","files":["bytes.rs","immutable.rs","mod.rs","mutable.rs","util.rs"]},{"name":"compute","dirs":[{"name":"aggregate","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["memory.rs","min_max.rs","mod.rs","sum.rs"]},{"name":"arithmetics","dirs":[{"name":"basic","files":["add.rs","div.rs","mod.rs","mul.rs","pow.rs","rem.rs","sub.rs"]},{"name":"decimal","files":["add.rs","div.rs","mod.rs","mul.rs","sub.rs"]}],"files":["mod.rs","time.rs"]},{"name":"cast","files":["binary_to.rs","boolean_to.rs","dictionary_to.rs","mod.rs","primitive_to.rs","timestamps.rs","utf8_to.rs"]},{"name":"comparison","files":["boolean.rs","mod.rs","primitive.rs","utf8.rs"]},{"name":"merge_sort","files":["mod.rs"]},{"name":"sort","dirs":[{"name":"primitive","files":["indices.rs","mod.rs","sort.rs"]}],"files":["lex_sort.rs","mod.rs"]},{"name":"take","files":["binary.rs","boolean.rs","dict.rs","generic_binary.rs","list.rs","mod.rs","primitive.rs","structure.rs","utf8.rs"]}],"files":["arity.rs","boolean.rs","boolean_kleene.rs","concat.rs","contains.rs","filter.rs","hash.rs","if_then_else.rs","length.rs","like.rs","limit.rs","mod.rs","nullif.rs","regex_match.rs","substring.rs","temporal.rs","utils.rs","window.rs"]},{"name":"datatypes","files":["field.rs","mod.rs","schema.rs"]},{"name":"ffi","files":["array.rs","ffi.rs","mod.rs"]},{"name":"io","dirs":[{"name":"csv","dirs":[{"name":"read","files":["deserialize.rs","infer_schema.rs","mod.rs","reader.rs"]},{"name":"write","files":["mod.rs","serialize.rs"]}],"files":["mod.rs"]},{"name":"ipc","dirs":[{"name":"gen","files":["File.rs","Message.rs","Schema.rs","SparseTensor.rs","Tensor.rs","mod.rs"]},{"name":"read","files":["common.rs","deserialize.rs","mod.rs","reader.rs","stream.rs"]},{"name":"write","files":["common.rs","mod.rs","schema.rs","serialize.rs","stream.rs","writer.rs"]}],"files":["common.rs","compression.rs","convert.rs","mod.rs"]},{"name":"json","dirs":[{"name":"read","files":["deserialize.rs","infer_schema.rs","mod.rs","reader.rs","util.rs"]},{"name":"write","files":["mod.rs","serialize.rs","writer.rs"]}],"files":["mod.rs","schema.rs"]},{"name":"json_integration","files":["mod.rs","read.rs","write.rs"]},{"name":"parquet","dirs":[{"name":"read","dirs":[{"name":"schema","files":["convert.rs","metadata.rs","mod.rs"]},{"name":"statistics","files":["binary.rs","boolean.rs","mod.rs","primitive.rs"]}],"files":["binary.rs","boolean.rs","fixed_size_binary.rs","mod.rs","primitive.rs","record_batch.rs","utf8.rs","utils.rs"]},{"name":"write","files":["binary.rs","boolean.rs","fixed_len_bytes.rs","mod.rs","primitive.rs","schema.rs","stream.rs","utf8.rs","utils.rs"]}],"files":["mod.rs"]}],"files":["mod.rs","print.rs"]},{"name":"types","dirs":[{"name":"simd","files":["mod.rs","native.rs"]}],"files":["bit_chunk.rs","mod.rs"]},{"name":"util","files":["bench_util.rs","mod.rs"]}],"files":["endianess.rs","error.rs","lib.rs","record_batch.rs","temporal_conversions.rs","trusted_len.rs"]};
createSourceSidebar();
