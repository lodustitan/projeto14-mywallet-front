import { Route, Routes, BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";
import IOPage from "../pages/IOPage";

function ReactRoutes() {
	return (
		<Style>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/sign-up" element={<Signup />} />
					<Route path="/sign-in" element={<Signin />} />
					<Route path="/entrada" element={<IOPage types='entrada' />} />
					<Route path="/saida" element={<IOPage types='saida' />} />
				</Routes>
			</BrowserRouter>
		</Style>
	);
}

const Style = styled.div`

	display: flex;
    justify-content: center;
	
	@media screen and (min-width: 764px) {
		width: 524px;
		height: 100vh;
	}

	@media screen and (max-width: 764px) {
		width: 100vw;
		height: 100vh;
	}

`;

export default ReactRoutes;
