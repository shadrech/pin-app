import React from "react";
import styled, {css} from "react-emotion";
import { connect } from "react-redux";

import LockIcon from "./icon-lock.svg";

const SvgImage = ({ svg, ...other }) => <span dangerouslySetInnerHTML={{ __html: svg }} {...other} />;

const SVGWrapper = styled(SvgImage)`
    fill: ${props => {
        if (props.verified) return "#65E53B";
        if (props.locked) return "#E51B1B";
        return "#5A718B";
    }};
    opacity: 0.1;

    #top {
        ${props => props.verified && css`
        
        `}
    }
`;

const Lock = ({locked, verified}) => (
    <img src={LockIcon} />
);

const mapStateToProps = ({locked, verified}) => ({
    locked,
    verified
});

export default connect(mapStateToProps)(Lock);