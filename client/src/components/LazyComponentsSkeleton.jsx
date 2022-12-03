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
        <SkeletonCircle w={{ base: 100, md: 200 }} height={"20px"} />
        <SkeletonCircle w={{ base: 10, md: 20 }} height={"20px"} />
        <SkeletonCircle w={{ base: 100, md: 200 }} height={"20px"} />
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
        <Skeleton
          w={{ sm: "container.sm", md: "container.md" }}
          height={{ base: "300px" }}
        />
        <Skeleton
          w={{ sm: "container.sm", md: "container.md" }}
          height={{ base: "300px" }}
        />
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
      <Flex justifyContent={"space-between"} pos={"fixed"} bottom={5}>
        <Skeleton w={{ base: 100, md: 200 }} height={"50px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"50px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"50px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"50px"} />
        <Skeleton w={{ base: 100, md: 200 }} height={"50px"} />
      </Flex>
    </Box>
  );
}

export default LazyComponentsSkeleton;
