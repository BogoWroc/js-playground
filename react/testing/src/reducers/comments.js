import {SAVE_COMMENT} from "actions/types";

export default function (state = {}, action) {
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, {'comment': action.payload}];
        default:
            return state;
    }
}