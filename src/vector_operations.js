'use strict';

exports.normalise = function(vec) {
    let sum = 0;
    
    // Make sure the vector is a unit vector
    for (let i=0;i<vec.length;i++)
        sum += vec[i]*vec[i];
    
    sum = sqrt(sum);
    
    for (let i=0;i<vec.length;i++)
        vec[i] /= sum;
}

