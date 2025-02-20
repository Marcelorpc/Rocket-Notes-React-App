import { StyledButton } from "./styles";
import PropTypes from "prop-types";

export function Button({ title, loading = false, ...rest }) {

  return(
    <StyledButton 
      type="button"
      disabled={loading}
      {...rest}
    >
      { loading ? 'Carregando...' : title}
    </StyledButton>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool
}