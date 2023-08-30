import Badge from 'react-bootstrap/Badge';
import PropTypes from 'prop-types';

function BadgeWidget(props) {
    BadgeWidget.propTypes = {
        badgeCount: PropTypes.string.isRequired,
    }

    return (
        <>
            <Badge bg="secondary">{props.badgeCount}</Badge>
        </>
    );
}

export default BadgeWidget