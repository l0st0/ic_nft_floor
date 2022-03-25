import { Routes as RouteComponent, Route } from 'react-router-dom';
import { Update } from './Update';
import Home from './Home';

export const Routes = () => {
  return (
    <RouteComponent>
      <Route path='/' element={<Home />} />
      <Route path='/update' element={<Update />} />
    </RouteComponent>
  );
};

export default Routes;
