import React from 'react';
import { HeartIcon } from '@heroicons/react/solid';

const Footer: React.FC = () => {
	return (
		<footer className="bg-gray-800 w-full">
			<h3 className="text-sm text-white flex items-center justify-center">
				Made With <HeartIcon className="h-6 w-6 mr-1 ml-1 text-red-500" /> by
				Mouhsine NEJMI & Yassine NEJMI.
			</h3>
		</footer>
	);
};

export default Footer;
