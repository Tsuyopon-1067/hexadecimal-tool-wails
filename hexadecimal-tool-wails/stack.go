package main

import "fmt"

var max int = 16

type Stack struct {
	data []int
}

type StackI interface {
	IsEmpty() bool
	IsFull() bool
	Push(int)
	Pop() int
	Size() int
}

var _ StackI = &Stack{}

func (s *Stack) IsEmpty() bool {
	return len(s.data) == 0
}

func (s *Stack) IsFull() bool {
	return len(s.data) == max
}

func (s *Stack) Push(n int) {
	if s.IsFull() {
		fmt.Println("error: stack is full.")
		return
	}
	s.data = append(s.data, n)
}

func (s *Stack) Pop() int {
	if s.IsEmpty() {
		fmt.Println("error: stack is empty.")
		return -1
	}
	topIndex := len(s.data) - 1
	res := s.data[topIndex]
	s.data = s.data[:topIndex]
	return res
}

func (s *Stack) Size() int {
	return len(s.data)
}