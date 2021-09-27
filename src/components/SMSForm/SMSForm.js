import React, { useState } from "react";
import styled from "styled-components";

/*
props:
	data, active country data
*/
const SMSInputContainer = styled.div`
	text-align: center;
	@media (max-width: 868px) {
		display: none;
	}
	& input {
		font-size: 14px;
		border: none;
		appearance: none;
		border-radius: 3px;
		padding: 12px;
		border: solid #c94b27 3px;
	}
	& button {
		font-size: 15px;
		font-weight: 700;
		padding: 12px;
		background: #c94b27;
		color: white;
		& :disabled {
			cursor: not-allowed;
		}
	}
`;

export default function SMSForm(props) {
	const STATUS = {
		NORMAL: "normal",
		SENDING: "sending",
		SUCCESS: "success",
		ERROR: "error",
	};
	const [phone, setPhone] = useState("");
	const [smsStatus, setSmsStatus] = useState(STATUS.NORMAL);
	const [visible, setVisible] = useState(true);

	const encode = (data) => {
		return Object.keys(data)
			.map(
				(key) =>
					encodeURIComponent(key) +
					"=" +
					encodeURIComponent(data[key])
			)
			.join("&");
	};

	const sendSMS = async (e) => {
		e.preventDefault();
		setSmsStatus(STATUS.SENDING);
		let phoneData = {
			Last_Update: new Date(props.data.Last_Update).toLocaleDateString(
				"en-us"
			),
			Country_Region: props.data.Country_Region,
			Deaths: props.data.Deaths.toLocaleString(),
			Confirmed: props.data.Confirmed.toLocaleString(),
			phone: phone,
		};
		try {
			const response = await fetch("/", {
				method: "POST",
				headers: {
					"Content-type":
						"application/x-www-form-urlencoded; charset=UTF-8",
				},
				body: encode({ "form-name": "notify", ...phoneData }),
			});
			if (response.status === 200) {
				setSmsStatus(STATUS.SUCCESS);
				setTimeout(() => {
					setSmsStatus(STATUS.NORMAL);
					setVisible(true);
				}, 3000);
			} else {
				setSmsStatus(STATUS.NORMAL);
				setVisible(true);
			}
		} catch (e) {
			console.error(e);
		}
	};

	const handlePhoneChange = (e) => {
		setPhone(e.target.value);
	};
	return (
		<SMSInputContainer>
			<hr />
			{visible ? (
				<button onClick={() => setVisible(false)}>
					Share to my Phone
				</button>
			) : (
				<form onSubmit={sendSMS} name="notify">
					<input type="hidden" name="form-name" value="contact" />
					<input
						onChange={handlePhoneChange}
						type="tel"
						placeholder="phone #"
						name="phone"
					/>
					<button
						disabled={smsStatus === STATUS.SENDING || phone === ""}
						type="submit"
					>
						{STATUS.NORMAL ? "Send" : "Sending..."}
					</button>
				</form>
			)}
		</SMSInputContainer>
	);
}
