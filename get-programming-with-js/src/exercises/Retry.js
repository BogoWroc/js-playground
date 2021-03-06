class MultiplicatorUnitFailure extends Error {
}

function primitiveMultiply(a, b) {
    if (Math.random() < 0.5) {
        return a * b;
    } else {
        throw new MultiplicatorUnitFailure();
    }
}

export function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);
    } catch (e) {
        if (e instanceof MultiplicatorUnitFailure) {
            return primitiveMultiply(a, b);
        } else {
            throw e;
        }
    }
}