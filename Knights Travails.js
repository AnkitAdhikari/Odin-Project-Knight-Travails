let a = 0;
let b = 0;
let boardDimension = 7;

let source = [a, b];

function findMoves(pos) {
    let [a, b] = pos;
    let destinations = [];


    if (a + 1 <= boardDimension && b + 2 <= boardDimension) {
        destinations.push([a + 1, b + 2]);
    }
    if (a + 1 <= boardDimension && b - 2 >= 0) {
        destinations.push([a + 1, b - 2]);
    }
    if (a + 2 <= boardDimension && b + 1 <= boardDimension) {
        destinations.push([a + 2, b + 1]);
    }
    if (a + 2 <= boardDimension && b - 1 >= 0) {
        destinations.push([a + 2, b - 1]);
    }
    if (a - 1 >= 0 && b - 2 >= 0) {
        destinations.push([a - 1, b - 2]);
    }
    if (a - 1 >= 0 && b + 2 <= boardDimension) {
        destinations.push([a - 1, b + 2]);
    }
    if (a - 2 >= 0 && b - 1 >= 0) {
        destinations.push([a - 2, b - 1]);
    }
    if (a - 2 >= 0 && b + 1 <= boardDimension) {
        destinations.push([a - 2, b + 1]);
    }

    return destinations;
}

function shortestPath(start, end) {
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start.toString());

    while (queue.length > 0) {
        let [current, path] = queue.shift();

        if (current[0] === end[0] && current[1] === end[1]) {
            return path;
        }


        let destinations = findMoves(current);
        for (let destination of destinations) {
            if (!visited.has(destination.toString())) {
                visited.add(destination.toString());
                queue.push([destination, path.concat([destination])]);
            }
        }
    }

    return null;
}

console.log(shortestPath([3, 3], [0, 0]));
console.log(shortestPath([0, 0], [7, 7])); 
