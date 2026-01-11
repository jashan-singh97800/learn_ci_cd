import { RouterProvider } from 'react-router-dom';
import { router } from './routing/routes';

export default function App() {
  return <RouterProvider router={router} />;
}
