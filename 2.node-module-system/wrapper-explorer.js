console.log(`Node module wrapper demo`);
console.log("_filename in wrapper explorer",__filename);
console.log("_dirname in wrapper explorer",__dirname);


module.exports.greet=function(name){
    console.log(`Hello ${name}`);
}
