import React from "react";
import {
  Box,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  useMediaQuery,
  Stack,
  Button,
  Flex,
} from "@chakra-ui/react";

function LazyComponentsSkeleton() {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");

  return (
    <Box minH="100vh">
      <Flex justifyContent={"space-between"}>
        <Skeleton w={{ base: 100, md: 200 }} height={"20px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"20px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"20px"} />
      </Flex>
      <Flex justifyContent={"space-between"} mt={3}>
        <Box>
          <Skeleton
            w={{ sm: "container.sm", md: "container.lg" }}
            height={{ base: "20px" }}
          />
        </Box>
      </Flex>
      <Flex justifyContent={"space-between"} mt={3}>
        <Box>
          <Skeleton w={"container.lg"} height={"300px"} />
          <Skeleton
            w={{ sm: "container.sm", md: "container.md" }}
            height={{ base: "20px" }}
          />
        </Box>
      </Flex>
      <Flex justifyContent={"space-between"} mt={3}>
        <Skeleton
          w={{ base: "100px", md: "200px" }}
          height={{ base: "100px", md: "200px" }}
        />
        <Skeleton
          w={{ base: "100px", md: "200px" }}
          height={{ base: "100px", md: "200px" }}
        />
        <Skeleton
          w={{ base: "100px", md: "200px" }}
          height={{ base: "100px", md: "200px" }}
        />
        <Skeleton
          w={{ base: "100px", md: "200px" }}
          height={{ base: "100px", md: "200px" }}
        />
        <Skeleton
          w={{ base: "100px", md: "200px" }}
          height={{ base: "100px", md: "200px" }}
        />
      </Flex>
    </Box>
  );
}

export default LazyComponentsSkeleton;
