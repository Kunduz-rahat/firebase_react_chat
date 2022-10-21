import React, { useContext } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import { CHAT_ROUTE } from '../utils/const';
import { LOGIN_ROUTE } from '../utils/const';
import {useAuthState} from 'react-firebase-hooks/auth'
import { Context } from '..';

export default function AppRouter() {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)
console.log(user)
	return user ? (
		<Routes>
			{privateRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={CHAT_ROUTE} replace />} />
		</Routes>
	) : (
		<Routes>
			{publicRoutes.map(({path, Component}) => (
				<Route key={path} path={path} element={<Component />} />
			))}
			<Route path='*' element={<Navigate to={LOGIN_ROUTE} replace />} />
		</Routes>
	)
 
}
