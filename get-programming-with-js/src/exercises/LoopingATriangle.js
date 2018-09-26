/*
Write a loop that makes seven calls to console.log to output the following triangle
#
##
###
####
#####
######
#######
 */

function loopATriangle(count) {
    for (let i = 1; i <= count; i++) {
        console.log("#".repeat(i));
    }
}

loopATriangle(7);