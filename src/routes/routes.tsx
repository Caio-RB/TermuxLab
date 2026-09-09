import { Route,Routes } from "react-router-dom";
import { ROUTER_VARIABLES } from "./router_variables";
import { HomeView } from "../pages/HomeView.tsx";
import { HardwareView } from "../pages/HardwareView.tsx";
import { TutorialsView } from "../pages/TutorialsView.tsx";
import { RoadmapView } from "../pages/RoadmapView.tsx";
export const AppRouter = () => {
	return(
		<Routes>
			<Route path={ROUTER_VARIABLES.HOME} element={<HomeView />} />
			<Route path={ROUTER_VARIABLES.HARDWARE} element={<HardwareView />} />
			<Route path={ROUTER_VARIABLES.TUTORIALS} element={<TutorialsView />} />
			<Route path={ROUTER_VARIABLES.ROADMAP} element={<RoadmapView />} />	
		</Routes>
	)
} 
