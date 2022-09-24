import { Link } from "@mui/material";
import * as React from "react";

export interface ExternalTextLinkProps {
    href: string;
}

const ExternalTextLink = (props: ExternalTextLinkProps): React.ReactElement => {
    const { href } = props;
    return (
        <Link href={`https://${href}`} underline="none" target="_blank">
            {href}
        </Link>
    );
};

export default ExternalTextLink;
