import { useCallback, MutableRefObject } from "react";

export const useHandleMouseEnterSection = (
  nodes: NodeListOf<ChildNode> | ChildNode[],
  addClass: string
) => {
  const cb = useCallback(() => {
    nodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.classList.add(addClass);
      }
    });
  }, [nodes, addClass]);
  return cb;
};

export const useHandleMouseLeaveSection = (
  nodes: NodeListOf<ChildNode> | ChildNode[],
  removeClass: string
) => {
  const cb = useCallback(() => {
    nodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.classList.remove(removeClass);
      }
    });
  }, [nodes, removeClass]);
  return cb;
};

export const useHandleMouseEnterItem = (
  nodes: NodeListOf<ChildNode> | ChildNode[],
  itemNode: MutableRefObject<null>,
  addClass: string,
  removeClass: string
) => {
  const cb = useCallback(() => {
    nodes.forEach((node) => {
      if (node instanceof HTMLElement && itemNode.current !== null) {
        if (node === itemNode.current) {
          node.classList.add(addClass);
          node.classList.remove(removeClass);
        }
      }
    });
  }, [nodes, itemNode, addClass, removeClass]);
  return cb;
};

export const useHandleMouseLeaveItem = (
  nodes: NodeListOf<ChildNode> | ChildNode[],
  addClass: string,
  removeClass: string
) => {
  const cb = useCallback(() => {
    nodes.forEach((node) => {
      if (node instanceof HTMLElement) {
        node.classList.remove(addClass);
        node.classList.add(removeClass);
      }
    });
  }, [nodes, addClass, removeClass]);
  return cb;
};
