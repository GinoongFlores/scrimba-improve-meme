import { useState } from "react";
import orokalimpyo from "../orokalimpyo";
export default function TestOroKalimpy() {
	const [testOro, setTestOro] = useState(orokalimpyo);

	const BarangayAdminKeys = Object.keys(testOro.BarangayAdmin);
	const BarangayAdmin = BarangayAdminKeys.map(
		(key) => testOro.BarangayAdmin[key].name
	);
	return (
		<>
			<ul>
				{BarangayAdmin.map((barangay, index) => (
					<li key={index}>{barangay}</li>
				))}
			</ul>
		</>
	);
}
