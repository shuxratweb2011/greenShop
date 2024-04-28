import PropTypes from "prop-types";

export default function FooterItemP({ info }) {
	return <p className='font-normal text-[14px] leading-[22px] text-[#727272]'>{info}</p>;
}

FooterItemP.propTypes = {
	info: PropTypes.string,
};
