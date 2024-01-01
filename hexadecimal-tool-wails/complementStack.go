package main

import (
	"fmt"
	"strconv"
)

type ComplementStack struct {
	stack Stack
}

type ComplementStackI interface {
	IsEmpty() bool
	IsFull() bool
	Push(int)
	Pop() int
	Size() int
	ToHexDecBinString() (string, string, string)
}

var _ ComplementStackI = &ComplementStack{}

func (s *ComplementStack) IsEmpty() bool {
	return s.stack.IsEmpty()
}

func (s *ComplementStack) IsFull() bool {
	return s.stack.IsFull()
}

func (s *ComplementStack) Push(n int) {
	s.stack.Push(n)
}

func (s *ComplementStack) Pop() int {
	return s.stack.Pop()
}

func (s *ComplementStack) Size() int {
	return s.stack.Size()
}

func (s *ComplementStack) ToHexDecBinString() (string, string, string) {
	int64Value := s.getInt64Value()
	intValue := int(int64Value)

	hexDigit := s.stack.Size()
	binDigit := hexDigit * 4
	return getHexDecBinString(intValue, hexDigit, binDigit)
}

func (s *ComplementStack) ToHexDecBinComplementString() (string, string, string) {
	int64Value := s.getInt64Value()
	var maxInt int64 = 1
	for _, _ = range s.stack.data {
		maxInt *= 16
	}
	complementValue := maxInt - int64Value
	intValue := int(complementValue)

	hexDigit := s.stack.Size()
	binDigit := hexDigit * 4
	return getHexDecBinString(intValue, hexDigit, binDigit)
}

func (s *ComplementStack) getInt64Value() int64 {
	var hexString string
	for _, v := range s.stack.data {
		hexString += fmt.Sprintf("%X", v)
	}

	res, _ := strconv.ParseInt(hexString, 16, 64)
	return res
}

func getHexDecBinString(value int, hexDigit int, binDigit int) (string, string, string) {
	hexString := fmt.Sprintf("%016X", value)
	decString := fmt.Sprintf("%d", value)
	binString := fmt.Sprintf("%064b", value)
	hexStringLen := len(hexString)
	binStringLen := len(binString)
	return hexString[hexStringLen-hexDigit:], decString, binString[binStringLen-binDigit:]
}
