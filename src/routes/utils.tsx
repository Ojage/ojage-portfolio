import { ReactNode, Suspense } from "react";
import { Box } from "@chakra-ui/react";
import LoadingExcerpt from "../components/common/LoadingExcerpt";

type LazyComponentProp = {
  childNode: ReactNode;
  animated?: boolean;
};

export const LazyComponentWrapper = ({
  childNode: element,
  animated,
}: LazyComponentProp) => {
//   const listenerRef = useRef(true);
  return (
    <Suspense fallback={<LoadingExcerpt />}>
      {animated ? (
        <Box className="animate__animated bounceInDown">{element}</Box>
      ) : (
        element
      )}
    </Suspense>
  );
};
