import React from 'react';

export class ProfileStatus extends React.Component{
    state =  {
        editMode: false
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
        this.forceUpdate()
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.forceUpdate()
    }
    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                </div> :
                <div>
                    <input type="text" onBlur={this.deactivateEditMode} autoFocus={true} value={this.props.status}/>
                </div>
            }
        </div>
    }
}