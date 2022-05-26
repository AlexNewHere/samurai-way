import {connect} from 'react-redux';
import {RootReducerType} from '../../Redux/redux-store';
import {Dispatch} from 'redux';
import {Users} from './Users';
import {followAC, PostType, setUsersAC, unFollowAC} from '../../Redux/UsersReducer';

export type MapStateToPropsType = {
    items: Array<PostType>
}
export type MapDispatchToPropsType = {
    onFollow: (userID: string) => void,
    unFollow: (userID: string) => void,
    setUsers: (users: Array<PostType>) => void,
}

export type UsersPropsType = MapStateToPropsType & MapDispatchToPropsType

let mapStateToProps = (state: RootReducerType): MapStateToPropsType => {
    return {
        items: state.usersPage.items
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        onFollow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootReducerType>(mapStateToProps, mapDispatchToProps)(Users)
