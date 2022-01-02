import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css'
import React from "react";


class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status:this.props.status
    }
    onStatusChange = (e) => {
        this.setState(
            {
                status: e.currentTarget.value,
            }
        )
    }
    toggleEditMode = () => {
        this.setState(
            {
                editMode: !this.state.editMode,
            }
        )
        if (!this.state.editMode) {
            this.props.updateStatus(this.state.status)
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status!==this.props.status){
        this.setState({
            status:this.props.status
        })
        }
    }
    render(){
    return (
        <div>
            <div>
                {!this.state.editMode ? <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    : <input onChange={this.onStatusChange} onDoubleClick={this.toggleEditMode} type="text" value={this.state.status} />}
               
            </div>
            
        </div>
        );
    }
}
export default ProfileStatus