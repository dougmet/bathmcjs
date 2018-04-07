'use strict';

exports.normalise = function(vec) {
    var sum = 0;
    
    // Make sure the vector is a unit vector
    for (var i=0;i<vec.length;i++)
        sum += vec[i]*vec[i];
    
    sum = sqrt(sum);
    
    for (i=0;i<vec.length;i++)
        vec[i] /= sum;
}

