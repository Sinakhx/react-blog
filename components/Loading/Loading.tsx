import CircularProgress from "@mui/material/CircularProgress";
import styles from "./Loading.module.scss";

interface ILoadingProps {
    height?: number | string;
}

export const Loading = ({ height }: ILoadingProps) => {
    const style = {...(height != null && { height })}
    return (
        <div {...style} className={styles["loading-container"]}>
            <CircularProgress />
        </div>
    );
};
