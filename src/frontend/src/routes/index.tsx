import { Routes as RouteComponent, Route } from 'react-router-dom';
import Home from './Home';

export const Routes = () => {
  return (
    <RouteComponent>
      <Route path='/' element={<Home />} />
    </RouteComponent>
  );
};

export default Routes;
