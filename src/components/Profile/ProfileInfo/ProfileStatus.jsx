import React from 'react';

export class ProfileStatus extends React.Component{
    state =  {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState(
            {
                editMode: true
            }
        )
    }
    deactivateEditMode = () => {
        this.setState(
            {
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    updateStatus = (status) => {
         return this.props.updateStatus(status)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.state.status
            })
            console.log('componentDidUpdate')
        }

    }

    render() {
        return <div>
            {!this.state.editMode ?
                <div>
                    <span onDoubleClick={this.activateEditMode}>{this.state.status || "----"}</span>
                </div> :
                <div>
                    <input type="text" onChange={this.onStatusChange}  onBlur={this.deactivateEditMode} autoFocus={true} value={this.state.status}/>
                </div>
            }
        </div>
    }
}