import "./App.css";
import { connect } from "react-redux";
import { incrementarContador, decrementarContador } from "./actions/contador";

function App({ contador, incrementar, decrementar }) {
    return (
        <div>
            <div className="App">Contador {contador}</div>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

const mapStateToProps = (state) => ({
    contador: state.contadorReducer.contador,
});

const mapDispatchToProps = (dispatch) => ({
    incrementar: () => dispatch(incrementarContador()),
    decrementar: () => dispatch(decrementarContador()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
