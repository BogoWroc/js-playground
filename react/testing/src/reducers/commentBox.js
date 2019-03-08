import {TYPE_COMMENT} from "actions/types";

export default function (state = "", action) {
    switch (action.type) {
        case TYPE_COMMENT:
            return action.payload;
        default:
            return state;
    }
}