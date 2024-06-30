import { useCallback } from "react";

export const useHandleMouseEnterSection = (nodes, addClass) => {
  return useCallback(() => {
    nodes.forEach((node) => {
      node.classList.add(addClass);
    });
  }, [nodes, addClass]);
};

export const useHandleMouseLeaveSection = (nodes, removeClass) => {
  return useCallback(() => {
    nodes.forEach((node) => {
      node.classList.remove(removeClass);
    });
  }, [nodes, removeClass]);
};

export const useHandleMouseEnterItem = (
  nodes,
  itemNode,
  addClass,
  removeClass
) => {
  return useCallback(() => {
    nodes.forEach((node) => {
      if (node === itemNode.current) {
        node.classList.add(addClass);
        node.classList.remove(removeClass);
      }
    });
  }, [nodes, itemNode, addClass, removeClass]);
};

export const useHandleMouseLeaveItem = (nodes, addClass, removeClass) => {
  return useCallback(() => {
    nodes.forEach((node) => {
      node.classList.remove(addClass);
      node.classList.add(removeClass);
    });
  }, [nodes, addClass, removeClass]);
};
