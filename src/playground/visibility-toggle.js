class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)

        this.toggleVisibility = this.toggleVisibility.bind(this);

        this.title = "Visibility Toggle";

        this.state = {
            visible: true
        };
    }

    toggleVisibility() {
        console.log(this.state.visible);
        this.setState((prevState) => {
            return {
                visible: !prevState.visible
            };
        });
    }



    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.toggleVisibility}>{this.state.visible ? 'Hide details' : 'Show details'}</button>
               {this.state.visible ? <p>This text is visible</p> : undefined}
        </div>
        );
    }    
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

/*let app = {
    title: 'Visibility Toggle',
    visibilityFlag: true
};

const toggleVisibility = () => {
    app.visibilityFlag = !app.visibilityFlag;

    render();
};

const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>{app.visibilityFlag ? 'Hide details' : 'Show details'}</button>
            {app.visibilityFlag ? <p>This text is visible</p> : undefined}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();*/